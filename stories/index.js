import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

storiesOf('Component', module)
  .add('simple info',
    withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `)(() =>
    <Button onClick={action('clicked')}>Hello Button</Button>
    )
  )

const stories = storiesOf('Storybook Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('with a button', () => (
  <button disabled={boolean('Disabled', false)} >
    {text('Label', 'Hello Button')}
  </button>
))

// Knobs as dynamic variables.
stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala');
  const age = number('Age', 89);

  const content = `I am ${name} and I'm ${age} years old.`;
  return (<div>{content}</div>);
});

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
  
  
  storiesOf('Component', module)
    .add('with some emoji', withNotes('<Table><tr>dsdsdsd</tr><td>dsdsdsd</td><td>dsdsdsd</td></Table>')(() => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>));