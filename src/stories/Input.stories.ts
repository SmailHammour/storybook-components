import {ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {moduleMetadata} from '@storybook/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';
import {InputComponent} from './input/input.component';

export default {
  title: 'Form/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BrowserAnimationsModule, MatInputModule, ReactiveFormsModule],
    }),
  ]
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args
});

export const Input = Template.bind({});

export const InputWithValidators = Template.bind({});
InputWithValidators.args = {
  validators: [Validators.required, Validators.email]
}
