import React from "react";
import { cn } from "@/lib/utils";
import Subscription from "./Subscription";

const subscriptionArray = [
  {
    plan: "STARTER",
    price: "$5/mo",
    popular: "",
    service: ["Automated Reporting", "Faster Processing", "Customizations"],
    info: "Literally you probably haven't heard of them jean shorts.",
  },
  {
    plan: "BASIC",
    price: "$15/mo",
    popular: "POPULAR",
    service: [
      "Everything in Starter",
      "100 Builds",
      "Progress Reports",
      "Premium Support",
    ],

    info: "Literally you probably haven't heard of them jean shorts.",
  },
  {
    plan: "PLUS",
    price: "$25/mo",
    popular: "",
    service: [
      "Everything in Basic",
      "Unlimited Builds",
      "Advanced Analytics",
      "Company Evaluations",
    ],

    info: "Literally you probably haven't heard of them jean shorts.",
  },
];
export type SubscriptionsType = typeof subscriptionArray
const subscription = () => {
  return (
    <div className={cn("w-full my-28 lg:my-16")}>
      <div className={cn(" mx-auto ")}>
        <div className={cn("text-center")}>
          <h1 className={cn("text-4xl leading-[0.5]")}>💎 Subscription</h1>
          <p className={cn(" text-base mt-2")}>
            Pricing to fit the needs of any company size.
          </p>
        </div>

        <div className={cn("grid xl:grid-cols-3 gap-12 mt-28 lg:grid-cols-2 grid-cols-1")}>
          {subscriptionArray.map((el, i) => (
            <Subscription key={i} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default subscription;
