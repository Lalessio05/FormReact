import { useState } from "react";
import { UIHeader } from "./UI/UIHeader";
import { UIInput } from "./UI/UIInput";
import { UITextArea } from "./UI/UITextArea";
import { UISelect } from "./UI/UISelect";
import { UIGroupCheckBox } from "./UI/UIGroupCheckBox";

const selectValues =[
  {id:1, name: "Italia", default:false},
  {id:2, name: "Francia", default:true},
  {id:3, name: "Germania", default:false},
]

const UIGroupCheckBoxValues = [
  {
    id: "comments",
    label: "Comments",
    value: 1,
    description: "Get notified when someones posts a comment on a posting."
  },
  {
    id: "candidates",
    label: "Candidates",
    value: 2,
    description: "Get notified when a candidate applies for a job."
  },
  {
    id: "offers",
    label: "Offers",
    value: 3,
    description: "Get notified when a candidate accepts or rejects an offer."
  }
];
interface FormState {
  firstName: string;
  lastName: string;
  description: string;
  country: number;
  notificationsPush: number[];
}
export const Form = ()=>{

    const [form,setForm]  = useState<FormState>({
        firstName : "",
        lastName : "",
        description: "",
        country: selectValues.find(x=>x.default)?.id ?? 0,
        notificationsPush : []
      });
    return (
      <div>
        <h3 className="text-xl leading-6 font-medium text-gray-900 text-center mb-1">
          Form
        </h3>
        <form className="space-y-6">
          <UIHeader
            title="Profilo"
            subtitle="Queste informazioni verranno visualizzate pubblicamente, quindi fai attenzione a ciò che condividi"
          />
          <div className="mt-4 py-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <UIInput
              id="firstName"
              label="FirstName"
              value={form.firstName}
              onChange={(event: any) =>
                setForm({ ...form, firstName: event.target.value })
              }
            />
            <UIInput
              id="lastName"
              label="LastName"
              value={form.lastName}
              onChange={(event: any) =>
                setForm({ ...form, lastName: event.target.value })
              }
            />
            <UITextArea
              id="description"
              label="Description"
              value={form.description}
              subtitle="Scrivi alcune frasi su di te..."
              onChange={(event: any) =>
                setForm({ ...form, description: event.target.value })
              }
            />
            <UISelect
              id="country"
              label="Country"
              values={selectValues}
              defaultValue={selectValues.find((x) => x.default)?.id ?? 0} //Variabilizzabile
              onChange={(event: any) =>
                setForm({ ...form, country: parseInt(event.target.value, 0) })
              }
            />
            </div>
            <UIHeader
              title="Notifications"
              subtitle="Ti faremo sempre sapere di cambiamenti importanti, ma sei tu a scegliere cos'altro vuoi sentire."
            />
            <div className="mt-4 py-4">
              <UIGroupCheckBox
                title="By email"
                values={UIGroupCheckBoxValues}
                onChange={(selected: Array<number>) =>
                  setForm({ ...form, notificationsPush: selected })
                }
              />
            </div>
        </form>
        <div className="my-4 bg-blue-800 text-white font-bold text-sm p-4 rounded-md shadow-md">
          <pre>
            <code>{JSON.stringify(form, undefined, 2)}</code>
          </pre>
        </div>
      </div>
    );
};