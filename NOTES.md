* don't commit node_modules to source
  add node_modules/ to .gitignore
* the directory hierarchy is weird, delete node_modules and other files outside `airbnb_pricing_front_end`
* don't push code that doesn't compile
* don't commit commented out code
* style/css code in jsx is a code smell
* I see `import styled from 'styled-components';` a lot. But I don't see where `styled-components` is coming from. Is it a node_module you need to add? `yarn add styled-components` then commit the yarn.lock and package.json file