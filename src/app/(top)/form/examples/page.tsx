'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

type Input = {
  type: 'cat' | 'dog';
};

export default function TopFormPage() {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (values) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values));
        resolve();
      }, 3000);
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <article className="prose max-w-full break-words">
        <h1>Welcome to Form!</h1>
        <h2>Form Example Page</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full gap-y-8">
          {/* Radio Button */}
          <div>
            <label className="label cursor-pointer justify-start gap-x-4">
              <input
                {...register('type', { required: '入力してください' })}
                type="radio"
                name="type"
                value="cat"
                disabled={isSubmitting}
                className="radio checked:bg-blue-500"
              />
              <span className="label-text">Cat</span>
            </label>
            <label className="label cursor-pointer justify-start gap-x-4">
              <input
                {...register('type')}
                type="radio"
                name="type"
                value="dog"
                disabled={isSubmitting}
                className="radio checked:bg-blue-500"
              />
              <span className="label-text">Dog</span>
            </label>
            {errors.type && (
              <label className="label">
                <span className="label-text text-error">{errors.type.message}</span>
              </label>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={'btn w-full max-w-xs mx-auto ' + (isSubmitting && 'loading ')}
          >
            送信
          </button>
        </form>
      </article>
    </div>
  );
}