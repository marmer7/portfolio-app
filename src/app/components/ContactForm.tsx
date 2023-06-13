import { useForm } from "@formspree/react";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

const FORM_ID: string = process.env.NEXT_PUBLIC_FORMSPRING_FORM_ID || "";

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-200 text-left"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder || label}
        required
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2 py-1"
      />
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm(FORM_ID);
  if (state.succeeded) {
    return (
      <p className="text-lg text-green-600">Thank you for your submission!</p>
    );
  }
  return (
    <form
      id="fs-frm"
      name="simple-contact-form"
      acceptCharset="utf-8"
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto space-y-2 bg-gray-100 dark:bg-gray-800 p-8 rounded-md shadow-md"
    >
      <fieldset id="fs-frm-inputs" className="space-y-6">
        <FormInput label="Full Name" name="name" type="text" />
        <FormInput
          label="Email Address"
          name="_replyto"
          type="email"
          placeholder="example@domain.com"
        />
        <FormInput
          label="Message"
          name="message"
          type="text"
          placeholder="Hello!"
        />

        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>

      <input
        type="submit"
        value="Submit"
        disabled={state.submitting}
        className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md"
      />
    </form>
  );
};

export default ContactForm;
