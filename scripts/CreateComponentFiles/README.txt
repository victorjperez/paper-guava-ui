import { Story, Meta, Canvas, ArgsTable } from '@storybook/addon-docs';
import { StorybookDocsFooter } from '../StorybookDocsFooter';

import { {% Component %} } from './{% Component %}';

# {% Component %}

`{% Component %}` description here. This should be brief and give an accurate overview of this component's functionality.

<Canvas>
    <Story id="core-ui-{% Component %}--main-story"/>
</Canvas>


```jsx
import React from 'react'
import { {% Component %} } from '@pguava-ui'

<{% Component %} />
```

## Component Options

<ArgsTable of={{% Component %}} />

Below is a more detailed list of props for `{% Component %}` and their usage.

### Prop

This is a in-depth description of a prop.

```jsx
<{% Component %} prop={true} />
```

## Accessibility

Below are the built in accessibility notes and considerations for `{% Component %}`.

### Accessibility Note

If there are any special accessibility concerns to note, provide them here in depth.

<StorybookDocsFooter />