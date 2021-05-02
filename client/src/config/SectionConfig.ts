interface AdMenu {
  name: string;
  child: Array<AdMenu> | Array<string>;
}

const config: Array<AdMenu> = [
    {
      name: "cars",
      child: [
          {
        name: "basic",
        child: [
          {
            name: "Audi",
            child: [
              "A4",
              "A5",
              "A6"
            ]
          }
        ]
      },
        {
          name: "kravas",
          child: [
            "Audi"
          ]
        }
      ]
    },
    {
      name: "phones",
      child:[
          "Apple"
      ]
    }
];

export default config;

export { AdMenu };