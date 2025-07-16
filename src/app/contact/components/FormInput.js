"use client";

const FormInput = ({ id, label, type = 'text', value, onChange }) => {
    const isTextarea = type === 'textarea';
    const InputComponent = isTextarea ? 'textarea' : 'input';

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
            <InputComponent
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={onChange}
                required
                rows={isTextarea ? 5 : undefined}
                className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6 transition-all duration-300"
            />
        </div>
    );
};

export default FormInput;