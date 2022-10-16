// src/histoire.setup.ts

import { defineSetupVue3 } from "@histoire/plugin-vue";
import ChakraPlugin, { extendTheme } from "@chakra-ui/vue-next";

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  app.use(ChakraPlugin, {
    extendTheme: extendTheme({
      emotionCacheOptions: {
        key: "chakra",
      },
      components: {
        Button: {
          baseStyle: {
            shadow: "inset",
            border: "none",
          },
          variants: {
            primary: {
              bg: "red.500",
            },
            secondary: {
              bg: "blue.500",
            },
            adrylen: {
              bg: "green.500",
            },
          },
        },
      },
    }),
  }); // Add Chakra Theme
});
