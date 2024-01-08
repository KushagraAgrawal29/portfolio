export default {
    name: "services",
    title: "Services",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "string",
      },
      {
        name: "imgUrl",
        title: "ImgUrl",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
    ],
  };
  