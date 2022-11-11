export default function RadioButton() {
    return (
        <>
            <label className="cursor-pointer">
                <input className="hidden" type="radio" name="payment" />
                <div className="h-[12px] w-[12px] bg-primary rounded-full relative">
                    <label className="h-[6px] w-[6px]  block rounded-full bg-white absolute transform -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 cursor-pointer"></label>
                </div>
            </label>
        </>
    );
}
