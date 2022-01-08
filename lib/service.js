import cheerio from "cheerio";
import { GH_API_URL, SOURCE_REPO } from "./constants";

export function useChannels() {
	return useFetch(`/repos/${SOURCE_REPO}/readme`, {
		baseURL: GH_API_URL,
		parseResponse: txt => txt,
		headers: {
			Accept: "application/vnd.github.html",
		},
		transform: readme => {
			const $ = cheerio.load(readme);
			const result = [];

			$("h4").each(function (index) {
				const items = [];
				const category = $(this).text().replace("Tutorial - ", "");

				$("tbody")[index].children.forEach(({ children: tr }) => {
					const rows = [];

					if (Array.isArray(tr)) {
						tr.forEach(({ children: td }, i) => {
							if (Array.isArray(td)) {
								let value = $.html(td);

								// get topics
								if (/,/i.test(value)) {
									value = value.replace(/<br>/g, ` `).trim();
								}

								// get url(s)
								if (/href/i.test(value)) {
									value = value.match(/href="(.*?)"/gi).map(val => {
										const [, url] = val.replace(/(['"])/g, "").split("=");
										return url;
									});
								}

								rows.push(value);
							}
						});

						items.push(rows);
					}
				});

				result.push({ category, items });
			});

			return result;
		},
	});
}
