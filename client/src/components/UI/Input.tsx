import { cva, type VariantProps } from "class-variance-authority"

const inputStyles = cva("w-full h-4", {
	variants: {
		intent: {
			default: " bg-inputBackground text-titleColor",
		},
	},

	defaultVariants: {
		intent: "default",
	},
})

interface Props extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputStyles> {}

export const Input = ({ intent, ...props }: Props) => {
	return <input className={inputStyles({ intent })} {...props} />
}
