import { cva, type VariantProps } from "class-variance-authority"

const buttonStyles = cva("w-full h-4", {
	variants: {
		intent: {
			default: " bg-buttonBackground text-titleColor",
		},
	},

	defaultVariants: {
		intent: "default",
	},
})

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {}

export const Button = ({ intent, ...props }: Props) => {
	return <button className={buttonStyles({ intent })} {...props} />
}
