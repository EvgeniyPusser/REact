
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CoffeeOrder } from '../models/CoffeeOrder';

interface Props {
  onSubmit: (data: CoffeeOrder) => void;
}

export const CoffeeOrderForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CoffeeOrder>();

  const onValid: SubmitHandler<CoffeeOrder> = data => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      {/* Coffee Type */}
      <div>
        <label>Type:</label>
        <select {...register('type', { required: 'Please select a coffee type' })}>
          <option value="">-- Select --</option>
          <option value="espresso">Espresso</option>
          <option value="cappuccino">Cappuccino</option>
          <option value="latte">Latte</option>
          <option value="americano">Americano</option>
        </select>
        {errors.type && <span style={{ color: 'red' }}>{errors.type.message}</span>}
      </div>

      {/* Flavor */}
      <div>
        <label>Flavor:</label>
        <select {...register('flavor', { required: 'Please choose a flavor' })}>
          <option value="">-- Select --</option>
          <option value="none">None</option>
          <option value="vanilla">Vanilla</option>
          <option value="caramel">Caramel</option>
          <option value="hazelnut">Hazelnut</option>
        </select>
        {errors.flavor && <span style={{ color: 'red' }}>{errors.flavor.message}</span>}
      </div>

      {/* Size */}
      <div>
        <label>Size:</label>
        <select {...register('size', { required: 'Please select a size' })}>
          <option value="">-- Select --</option>
          <option value="short">Short</option>
          <option value="tall">Tall</option>
          <option value="grand">Grand</option>
        </select>
        {errors.size && <span style={{ color: 'red' }}>{errors.size.message}</span>}
      </div>

      {/* Strength */}
      <div>
        <label>Strength (%):</label>
        <input
          type="number"
          {...register('strength', {
            required: 'Please enter strength',
            min: { value: 0, message: 'Strength must be at least 0' },
            max: { value: 100, message: 'Strength cannot exceed 100' },
          })}
        />
        {errors.strength && <span style={{ color: 'red' }}>{errors.strength.message}</span>}
      </div>

      <br />
      <button type="submit">Submit Order</button>
    </form>
  );
};

