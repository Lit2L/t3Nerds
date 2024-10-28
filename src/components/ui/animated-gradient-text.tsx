export default function AnimatedGradientText({ text }: { text: string }) {
  return (
    <span className='animate-text-gradient font-logo inline-flex bg-gradient-to-r from-emerald-500 via-emerald-900 to-emerald-400 bg-[200%_auto] bg-clip-text text-center text-3xl font-medium text-transparent'>
      {text}
    </span>
  )
}
