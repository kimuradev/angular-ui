/* eslint-disable @typescript-eslint/naming-convention */
import { Story } from '@storybook/angular/types-6-0';

import { InputComponent as Input } from '../projects/app/src/lib/input/input.component';

export default {
  title: 'Components/Input',
  component: Input,
};

// We create a “template” of how args map to rendering
const Template: Story<Input> = (args: Input) => ({
  component: Input,
  props: args,
});

// Each story then reuses that template
export const InputField = Template.bind({});
InputField.args = {
  primary: true,
  label: 'Input',
};
