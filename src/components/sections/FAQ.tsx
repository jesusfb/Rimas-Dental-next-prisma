import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui";

import { faqData } from "@/data";
import { baloo } from "@/fonts";

import React from "react";
interface Props extends React.ComponentProps<"div"> {
	dictionary: any;
}

export const FAQ = ({ dictionary, ...props }: Props) => {
	return (
		<div {...props} className="home_sections-container container">
			<h2 className={`mt-8 py-4 font-grotesk text-4xl font-bold text-main-400 2xl:text-5xl ${baloo.className}`}>
				{dictionary?.faqHeading}
			</h2>

			<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
				{faqData.map((faq) => (
					<Accordion type="single" collapsible key={faq.question}>
						<AccordionItem value={faq.question} className="border-none">
							<AccordionTrigger className="rounded-3xl text-xs sm:text-xs md:text-sm xl:text-lg 2xl:text-2xl">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="rounded-3xl px-4 text-xs sm:text-xs md:text-sm xl:text-lg">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</div>
	);
};
