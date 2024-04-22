import { useState } from "react";
import { UIHeader } from "./UI/UIHeader";
import { UIInput } from "./UI/UserInputs/UIInput";
import { UITextArea } from "./UI/UserInputs/UITextArea";
import { UISelect } from "./UI/UserInputs/UISelect";
import { UIGroupCheckBox } from "./UI/UserInputs/UICheckBoxs/UIGroupCheckBox";
import { UIGroupRadioButton } from "./UI/UserInputs/UIRadioButtons/UIGroupRadioButton";
import { UIFile } from "./UI/UserInputs/UIFiles/UIFile";
import { UIButton } from "./UI/UserInputs/UIButton";

const selectValues = [
  { id: 1, name: "Italia", default: false },
  { id: 2, name: "Francia", default: true },
  { id: 3, name: "Germania", default: false },
];

const UIGroupCheckBoxValues = [
  {
    id: "comments",
    label: "Comments",
    value: 1,
    description: "Get notified when someones posts a comment on a posting.",
  },
  {
    id: "candidates",
    label: "Candidates",
    value: 2,
    description: "Get notified when a candidate applies for a job.",
  },
  {
    id: "offers",
    label: "Offers",
    value: 3,
    description: "Get notified when a candidate accepts or rejects an offer.",
  },
];

const UIGroupRadioButtonValues = [
  {
    label: "Everything",
    id: "everything",
    value: 1,
    description: "Get notified when someones posts a comment on a posting.",
  },
  {
    label: "Same as email",
    id: "same",
    value: 2,
    description: "Get notified when a candidate applies for a job.",
  },
  {
    label: " No push notifications",
    id: "np-push",
    value: 3,
    description: "Get notified when a candidate accepts or rejects an offer.",
  },
];

interface FormState {
  firstName: string;
  lastName: string;
  description: string;
  country: number;
  notificationsType: number[];
  notificationPush: number;
  files: Array<File>
}
export const Form = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    description: "",
    country: selectValues.find((x) => x.default)?.id ?? 0,
    notificationsType: [],
    notificationPush: -1,
    files: [],
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
              setForm({ ...form, notificationsType: selected })
            }
          />
          <UIGroupRadioButton
            nameGroup="push-notifications"
            title="Push Notifications"
            values={UIGroupRadioButtonValues}
            onChange={(event: any) =>
              setForm({
                ...form,
                notificationPush: parseInt(event.target.value, 0),
              })
            }
          />
          <UIFile
            id="myFile"
            label="Add Photo"
            onFileAdd={(selected: Array<File>) =>
              setForm({ ...form, files: selected })
            }
          />
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <UIButton
              title="Cancel"
              onClick={() => console.log()}
              solid={true}
            />
            <UIButton
              title="Save"
              onClick={() => console.log()}
              solid={false}
            />
          </div>
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
