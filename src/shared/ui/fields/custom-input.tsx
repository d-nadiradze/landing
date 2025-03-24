"use client"

import React, {useRef, useState, ChangeEvent} from "react";
import {useOutsideClickHandler} from "@/shared/hooks";
import {EyeIcon, EyeDisabledIcon, TopUpIcon} from "@/shared/ui/icons";
import {customPurple, customGray} from "@/shared/enums";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    callback?: (value: string) => void;
    className?: string;
    errors?: string | null;
    inputClassName?: string;
    hasClearBtn?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
                                                            label,
                                                            callback,
                                                            errors,
                                                            inputClassName,
                                                            hasClearBtn,
                                                            className = '',
                                                            ...rest // Remaining input props from HTMLInputElement
                                                        }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const inputClick = () => {
        setIsClicked(true);

        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleOutsideClick = () => {
        setIsClicked(false);
    };

    const wrapperRef = useOutsideClickHandler(handleOutsideClick);

    const clearValue = () => {
        if (callback) {
            callback("");
        }
        setInputValue("");
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        callback && callback(e.target.value);
    };

    return (
        <div
            className={`relative ${className}`}
            ref={wrapperRef}
            onClick={inputClick}
        >
            <input
                ref={inputRef}
                type={showPassword ? "text" : rest.type}
                value={rest.value ?? inputValue}
                onChange={(e) => handleChange(e)}
                className={`max-h-[50px] overflow-hidden text-sm ${errors ? 'border-error bg-error-light' : 'border-transparent bg-custom-gray-bg'}  focus:border-custom-gray focus:ring-0 custom-select w-full flex justify-between pb-[8px] pt-[22px] px-4 rounded-[8px] focus:outline-0 ${inputClassName ? inputClassName : ''}`}
                {...rest}
            />
            <label
                className={`select-label ${errors ? 'text-error' : 'text-custom-gray-text'} absolute text-custom-gray-text left-4 ${
                    isClicked || inputValue || rest.value
                        ? "text-[10px] top-[8px]"
                        : "text-[14px] top-1/2 -translate-y-1/2"
                } duration-200`}
            >
                {
                    errors ?
                        errors
                        :
                        label
                }            </label>
            {rest.type === "password" && (
                <div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 focus:outline-none cursor-pointer"
                    onClick={toggleShowPassword}
                >
                    {!showPassword ? <EyeIcon color={customPurple}/> :
                        <EyeDisabledIcon size={23} color={customPurple}/>}
                </div>
            )}

            <div className="flex absolute right-4 -translate-y-1/2 top-1/2 gap-1 items-center">
                {isClicked && inputValue && hasClearBtn ? (
                    <div
                        className="p-1 rotate-45 bg-white rounded-full cursor-pointer"
                        onClick={() => clearValue()}
                    >
                        <TopUpIcon color={customGray}/>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
