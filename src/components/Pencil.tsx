export function Pencil({ onClick }: { onClick: () => void }) {
    return (
        <button
            type='button'
            className='ml-2 text-error group'
            onClick={onClick}
            aria-label='Edit'
            tabIndex={0}
        >
            <svg
                width='18'
                height='18'
                fill='currentColor'
                viewBox='0 0 20 20'
                className='group-hover:cursor-pointer'
                aria-hidden='true'
            >
                <path d='M17.414 2.586a2 2 0 0 0-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 0 0 0-2.828zM5 18a1 1 0 0 1-1-1v-2.586a1 1 0 0 1 .293-.707l9-9 2.828 2.828-9 9A1 1 0 0 1 5 18z' />
            </svg>
        </button>
    )
}
