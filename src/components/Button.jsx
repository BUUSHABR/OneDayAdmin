export function PrimaryButton({ children, dark, disabled = false, width, block, ...props }) {
    return (
      <button
        disabled={disabled}
        className={`my-10 px-8 py-[13px]  ${props.isrounded ? 'rounded-full' : 'rounded'
          } uppercase ${!props.red && !props.light && 'text-white'} text-center text-button font-bold
        ${props.light && ' bg-[#FFFFFF] border-[1px] border-int-dark-blue text-int-dark-blue'}
        ${props.red && ' bg-[#EB5757] border-[1px] border-[#EB5757] text-[#FFFFFF]'}
        ${dark ? ' bg-primary' : ''}
        ${disabled ? ' bg-int-grey-30' : ''}
        ${block ? ' w-full' : ''} ${width ? width : ' '} ${!props.light && !props.red && ' bg-int-dark-blue'
          }`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  export function SecondaryButton({ children, dark, disabled, block, ...props }) {
    return (
      <button
        disabled={disabled}
        className={`m-0 px-8 py-3 ${!props.disabled_attributes && 'rounded-lg'} uppercase text-int-grey-40 text-center text-button font-bold
        ${block ? 'w-full' : ''} ${props.disabled_attributes ? props.disabled_attributes : ''}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  export function TertiaryButton({ children, dark, disabled, block, ...props }) {
    return (
      <button
        disabled={disabled}
        className={`m-0 uppercase text-int-dark-blue text-center text-button font-bold
        ${block ? 'w-full' : ''}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  