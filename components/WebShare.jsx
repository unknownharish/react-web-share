import React from "react";
import { RWebShare } from "react-web-share";

export default function WebShareGfg() {
    return (
        <div>
            <RWebShare
                data={{
                    text: "Like humans, flamingos make friends for life",
                    url: "https://on.natgeo.com/2zHaNup",
                    title: "Flamingos",
                }}
                onClick={() => console.log("shared successfully!")}
            >
                <button className="font-bold">Click to share</button>
            </RWebShare>
        </div>
    );
};