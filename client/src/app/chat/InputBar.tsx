export default function InputGroup() {
  return (
    <div className="flex items-center w-full sm:w-4/5 py-4 px-3 shadow-xl rounded-md border">
      <button className="ml-6">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.625 10.5C6.625 10.5995 6.58549 10.6948 6.51517 10.7652C6.44484 10.8355 6.34946 10.875 6.25 10.875C6.15054 10.875 6.05516 10.8355 5.98484 10.7652C5.91451 10.6948 5.875 10.5995 5.875 10.5C5.875 10.4005 5.91451 10.3052 5.98484 10.2348C6.05516 10.1645 6.15054 10.125 6.25 10.125C6.34946 10.125 6.44484 10.1645 6.51517 10.2348C6.58549 10.3052 6.625 10.4005 6.625 10.5ZM6.625 10.5H6.25M10.375 10.5C10.375 10.5995 10.3355 10.6948 10.2652 10.7652C10.1948 10.8355 10.0995 10.875 10 10.875C9.90054 10.875 9.80516 10.8355 9.73483 10.7652C9.66451 10.6948 9.625 10.5995 9.625 10.5C9.625 10.4005 9.66451 10.3052 9.73483 10.2348C9.80516 10.1645 9.90054 10.125 10 10.125C10.0995 10.125 10.1948 10.1645 10.2652 10.2348C10.3355 10.3052 10.375 10.4005 10.375 10.5ZM10.375 10.5H10M14.125 10.5C14.125 10.5995 14.0855 10.6948 14.0152 10.7652C13.9448 10.8355 13.8495 10.875 13.75 10.875C13.6505 10.875 13.5552 10.8355 13.4848 10.7652C13.4145 10.6948 13.375 10.5995 13.375 10.5C13.375 10.4005 13.4145 10.3052 13.4848 10.2348C13.5552 10.1645 13.6505 10.125 13.75 10.125C13.8495 10.125 13.9448 10.1645 14.0152 10.2348C14.0855 10.3052 14.125 10.4005 14.125 10.5ZM14.125 10.5H13.75M19 10.5C19 11.6819 18.7672 12.8522 18.3149 13.9442C17.8626 15.0361 17.1997 16.0282 16.364 16.864C15.5282 17.6997 14.5361 18.3626 13.4442 18.8149C12.3522 19.2672 11.1819 19.5 10 19.5C8.8181 19.5 7.64778 19.2672 6.55585 18.8149C5.46392 18.3626 4.47177 17.6997 3.63604 16.864C2.80031 16.0282 2.13738 15.0361 1.68508 13.9442C1.23279 12.8522 1 11.6819 1 10.5C1 8.11305 1.94821 5.82387 3.63604 4.13604C5.32387 2.44821 7.61305 1.5 10 1.5C12.3869 1.5 14.6761 2.44821 16.364 4.13604C18.0518 5.82387 19 8.11305 19 10.5Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Tell me more..."
        className="ml-3 bg-inherit w-4/5"
      />
      <button className="ml-2.5">
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.9702 2.1589C16.7612 1.94996 16.5132 1.78423 16.2402 1.67115C15.9672 1.55808 15.6746 1.49988 15.3792 1.49988C15.0837 1.49988 14.7911 1.55808 14.5181 1.67115C14.2451 1.78423 13.9971 1.94996 13.7882 2.1589L2.84817 13.0989C2.14495 13.8023 1.74993 14.7562 1.75003 15.7508C1.75012 16.7453 2.14531 17.6992 2.84867 18.4024C3.55202 19.1056 4.50592 19.5006 5.50052 19.5005C6.49512 19.5004 7.44895 19.1053 8.15217 18.4019L15.8452 10.7089C15.9873 10.5764 16.1754 10.5043 16.3697 10.5077C16.564 10.5112 16.7494 10.5899 16.8868 10.7273C17.0242 10.8647 17.1029 11.0501 17.1063 11.2444C17.1098 11.4387 17.0377 11.6267 16.9052 11.7689L9.21217 19.4619C8.72702 19.9598 8.14783 20.3563 7.5082 20.6286C6.86857 20.9008 6.18124 21.0433 5.4861 21.0478C4.79097 21.0523 4.10185 20.9187 3.45876 20.6548C2.81566 20.3908 2.23139 20.0018 1.73984 19.5102C1.24829 19.0187 0.859255 18.4344 0.595309 17.7913C0.331363 17.1482 0.197762 16.4591 0.202258 15.764C0.206754 15.0688 0.349258 14.3815 0.621501 13.7419C0.893743 13.1022 1.2903 12.523 1.78817 12.0379L12.7272 1.0979C13.4305 0.394675 14.3844 -0.000337892 15.379 -0.000244124C16.3736 -0.000150356 17.3274 0.395043 18.0307 1.0984C18.7339 1.80175 19.1289 2.75565 19.1288 3.75025C19.1287 4.74485 18.7335 5.69868 18.0302 6.4019L7.09717 17.3349L7.08917 17.3429L7.08217 17.3499L7.08017 17.3519L7.07717 17.3539C6.64953 17.753 6.08325 17.9699 5.4984 17.9586C4.91354 17.9473 4.35608 17.7087 3.9442 17.2933C3.53232 16.8779 3.29841 16.3184 3.29206 15.7335C3.28571 15.1485 3.50741 14.5841 3.91017 14.1599L11.7202 6.3499C11.8616 6.21321 12.051 6.13752 12.2476 6.13914C12.4443 6.14075 12.6324 6.21954 12.7715 6.35853C12.9107 6.49752 12.9896 6.6856 12.9914 6.88225C12.9932 7.07889 12.9177 7.26838 12.7812 7.4099L4.97117 15.2199C4.82954 15.3597 4.74924 15.55 4.74793 15.7489C4.74662 15.9479 4.8244 16.1393 4.96417 16.2809C5.10394 16.4225 5.29424 16.5028 5.49322 16.5041C5.6922 16.5054 5.88354 16.4277 6.02517 16.2879L16.9702 5.3399C17.1791 5.13096 17.3448 4.88293 17.4579 4.60994C17.571 4.33696 17.6292 4.04437 17.6292 3.7489C17.6292 3.45342 17.571 3.16084 17.4579 2.88785C17.3448 2.61487 17.1791 2.36783 16.9702 2.1589Z"
            fill="black"
          />
        </svg>
      </button>
      <button className="ml-2.5">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.99955 10.5L1.26855 1.62598C7.80136 3.52565 13.9619 6.52677 19.4846 10.5C13.9623 14.4738 7.80213 17.4755 1.26955 19.376L3.99955 10.5ZM3.99955 10.5H11.4996"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}