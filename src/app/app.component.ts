import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
	selector: 'app-root',
	template: `
		<form [formGroup]="form" (ngSubmit)="submit(model)">
			<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
			<button [disabled]="form.invalid" type="submit">Submit</button>
		</form>

		<router-outlet></router-outlet>
	`,
	styles: []
})
export class AppComponent {
	title = 'formly-beta';

	form = new FormGroup({});

	fields: FormlyFieldConfig[] = [
		{
			key: 'email',
			type: 'input',
			props: {
				label: 'Email address',
				placeholder: 'Enter email',
				required: true
			}
		}
	];
	model = {};

	submit(model: any) {}
}
