type Props = {
  index: number
  size: number
  label: string
}

export const Progress = ({ index, size, label }: Props) => {
  return (
    <div className="flex justify-left m-1">
      <div className="items-center justify-center w-2">{index + 1}</div>
      <div className="w-full ml-2">
        <div
<<<<<<< HEAD
          style={{ width: `${5 + size}%` }}
          className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 rounded-l-full"
=======
          style={{ width: `${8 + size}%` }}
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5"
>>>>>>> 7d1a95b867d250bd060c4faa244b7eff9c929f10
        >
          {label}
        </div>
      </div>
    </div>
  )
}
