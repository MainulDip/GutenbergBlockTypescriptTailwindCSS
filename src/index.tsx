import React from "react";
import "./styles/tailwind.css";

interface Props {
  attributes: {
    skyColor: string;
    grassColor: string;
  };
  setAttributes?: any;
}

declare global {
  var wp: any;
}

wp.blocks.registerBlockType("tsgutenblock/block-type", {
  title: "TypesScript GurenBerg Block Creating",
  icon: "smiley",
  category: "common",
  attributes: {
    skyColor: { type: "string" },
    grassColor: { type: "string" },
  },
  edit: (props: Props) => {
    // const updateSkyColor = (e: React.SyntheticEvent) => {
    //   props.setAttributes({ skyColor: (e.target as HTMLTextAreaElement).value });
    // };
    // const updateGrassColor = (e: React.SyntheticEvent) => {
    //   props.setAttributes({ grassColor: (e.target as HTMLTextAreaElement).value });
    // };
    return (
      <>
        <div className="bg-red-700" style={{ backgroundColor: 'yellow'}}>
          <input
            type="text"
            name="skycolor"
            id=""
            placeholder="sky color"
            value={props.attributes.skyColor}
            onChange={(e) => props.setAttributes({ skyColor: e.target.value })}
          />
          <input
            type="text"
            value={props.attributes.grassColor}
            name="grasscolor"
            id=""
            placeholder="grass color"
            onChange={(e) =>
              props.setAttributes({ grassColor: e.target.value })
            }
          />
        </div>
      </>
    );
  },
  save: (props: Props) => {
    // return null;

    return (
      <>
        <p style={{ backgroundColor: 'yellow'}}>
          The sky color is {props.attributes.skyColor} and grass color is{' '}
          {props.attributes.grassColor}
        </p>
      </>
    )
  },
});
