import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {moduleMetadata} from '@storybook/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {ButtonComponent} from './button/button.component';

export default {
  title: 'Form/Buttons/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BrowserAnimationsModule, MatButtonModule],
    }),
  ],
  argTypes: {
    color: {
      options: [
        'none', 'primary', 'accent', 'warn'
      ],
      control: {
        type: 'select'
      },
    },
    type: {
      options: [
        'basic', 'raised', 'stroked', 'flat'
      ],
      control: {
        type: 'select'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    text: {
      control: {
        type: 'text'
      },
      defaultValue: 'Button'
    }
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Button = Template.bind({});
