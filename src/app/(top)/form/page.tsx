'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: '入力してください' }),
  age: z.number({ invalid_type_error: '入力してください' }).nonnegative('0以上を入力してください'),
});

type Schema = z.infer<typeof schema>;

export default function TopFormPage() {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = (values) => {
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
        <h2>using React-Hook-Form</h2>
        <form onSubmit={handleSubmit} className="form-control w-full gap-y-4">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register('name')}
              disabled={isSubmitting}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.name?.message && (
              <label className="label">
                <span className="label-text text-error">{errors.name.message.toString()}</span>
              </label>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              {...register('age', { valueAsNumber: true })}
              disabled={isSubmitting}
              type="number"
              className="input input-bordered w-full"
            />
            {errors.age?.message && (
              <label className="label">
                <span className="label-text text-error">{errors.age.message.toString()}</span>
              </label>
            )}
          </div>

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
