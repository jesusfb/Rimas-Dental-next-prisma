/* eslint-disable no-mixed-spaces-and-tabs */
"use client";

import { Clock2 } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/utils";

interface TimePickerProps extends React.ComponentPropsWithoutRef<"button"> {
	timeValue: { from: string; to: string };
	onValueChange: (value: { from: string; to: string }) => void;
}

const times = [
	{
		from: "5:00 PM",
		to: "6:00 PM",
	},
	{
		from: "6:00 PM",
		to: "7:00 PM",
	},
	{
		from: "7:00 PM",
		to: "8:00 PM",
	},
	{
		from: "8:00 PM",
		to: "9:00 PM",
	},
	{
		from: "9:00 PM",
		to: "10:00 PM",
	},
];

export function TimePicker({ timeValue, onValueChange, className }: TimePickerProps) {
	const handleValueChange = (timeValue: { from: string; to: string }) => {
		onValueChange(timeValue);
	};
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					type="button"
					variant={"outline"}
					className={cn("max-w-[280px] justify-start text-left font-normal", !timeValue && "text-muted-foreground")}
				>
					<Clock2 className="mr-2 h-4 w-4" />
					{!timeValue ? "Time" : `${timeValue.from} - ${timeValue.to}`}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full -translate-x-10 bg-transparent p-0">
				<ol>
					{times.map((time) => (
						<li
							key={time.from}
							className="flex cursor-pointer items-center justify-between gap-x-2 bg-white px-2 py-1 hover:bg-gray-100"
							onClick={() => handleValueChange(time)}
						>
							<span>{time.from}</span>
							<span>-</span>
							<span>{time.to}</span>
						</li>
					))}
				</ol>
			</PopoverContent>
		</Popover>
	);
}
