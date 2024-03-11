import React, { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';

function Input(props) {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setFocused(!!props.field.value);
  }, [props.field.value]);

  const inputClass = useMemo(() => {
    return classnames(
      'border',
      'bg-black',
      'inline-block',
      'text-int-grey-60',
      ` ${props.text ? 'text-'+props.text: 'text-[50%]'}`,
      'p-[20px]',
      'rounded-[4px]',
      'w-full',
      'outline-none',
      {
        'border-int-red': props.error,
        'border-int-mid-blue': !props.error,
      }
    );
  }, [props.error]);

  const labelClass = useMemo(() => {
    return classnames('absolute', 'left-2', 'transition-all', 'transform', 'cursor-auto','bg-black', 'pointer-events-none', {
      'text-int-red': props.error,
      'top-1/2': !focused,
      'text-[20px]': !focused && !props.field.value,
      'text-[30%]': focused && !props.text,
      'text-[50%]': focused && props.text,
      '-translate-y-1/3': !focused && !props.field.value,
      '-top-[1px]': focused || props.field.value,
    });
  }, [props.error, focused, props.field.value]);

  return (
    <div className={`mb-5 ${props.className ? props.className : ''}`}>
      <div className="mb-1 relative">
        <input
          id={props.id}
          type={props.type}
          className={inputClass}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(!!props.field.value)}
          name={props.field.name}
          value={props.field.value}
          onChange={props.field.onChange}
          placeholder={focused && props.placeholder}
          {...props.maxLength ? `maxLength={props.maxLength}` : ''}
          />
        <label htmlFor={props.id} className={labelClass}>
          {props.label}
        </label>
      </div>
      {props.error && props.errorMessage && (
        <span className="text-int-red font-BeVietnamRegular text-sm">{props.errorMessage}</span>
      )}
    </div>
  );
}

export default Input;
