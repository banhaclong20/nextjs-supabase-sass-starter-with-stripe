"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Checkout from "./Checkout";
import useUser from "@/app/hook/useUser";

export default function Price() {
	const { data: user, isLoading } = useUser();
	const prices = [
		{
			title: "Hobby",
			description: "Start your next side project",
			benefits: [
				"Improved productivity",
				"Enhanced performance",
				"Cost savings",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 10,
			priceId: "price_1OuNwwK77v3vOv2106uhQkhL",
		},
		{
			title: "Pro",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
			benefits: [
				"Improved productivity",
				"Enhanced performance",
				"Cost savings",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 20,
			priceId: "price_1OuNxMK77v3vOv21BHmQh3Lm",
		},
		{
			title: "Enterpise",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
			benefits: [
				"Improved productivity",
				"Enhanced performance",
				"Cost savings",
				"Improved communication",
				"Enhanced collaboration",
			],
			amount: 100,
			priceId: "price_1OuNxeK77v3vOv21ruMRfY76",
		},
	];
	if (isLoading) {
		return <></>;
	}
	if (user?.subscription?.customer_id) {
		return <></>;
	}

	return (
		<div>
			<div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
				{prices.map((price, index) => {
					const isPopular = index === 1;

					return (
						<div
							key={index}
							className={cn(" border rounded-md p-5 space-y-5", {
								"ring-2 ring-green-500": isPopular,
							})}
						>
							<div className="space-y-3">
								<h1 className="text-2xl font-bold">
									{price.title}
								</h1>
								<h1 className="text-3xl font-bold">
									{price.amount}$
								</h1>
								<p className="text-sm text-gray-400">
									{price.description}
								</p>
							</div>
							<div className="space-y-3">
								{price.benefits.map((benefit, index) => {
									return (
										<div
											key={index}
											className="flex items-center gap-2"
										>
											<CheckCircle2 />
											<h1 className="text-sm text-gray-400">
												{benefit}
											</h1>
										</div>
									);
								})}
							</div>
							<Checkout priceId={price.priceId} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
