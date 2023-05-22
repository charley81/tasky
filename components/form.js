import Link from 'next/link'

const Form = ({ type, taskObj, submitting, handleSubmit, setTask }) => {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h1 className="head_text">{type} Post</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-7 glassmorphism"
      >
        <label className="font-semibold text-base text-gray-700">
          Enter Task
          <input
            type="text"
            value={taskObj.task}
            onChange={e => setTask({ ...taskObj, task: e.target.value })}
            placeholder="Enter Task..."
            required
            className="form_input"
          />
        </label>
        <label className='font-semibold text-base text-gray-700"'>
          Enter Tags
          <input
            type="text"
            value={taskObj.tag}
            onChange={e => setTask({ ...taskObj, tag: e.target.value })}
            placeholder="#homework #yard #job"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}
export default Form
