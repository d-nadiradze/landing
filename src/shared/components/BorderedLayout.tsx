import React, {ReactNode} from 'react';

type BorderLayoutType = {
    children?: ReactNode,
    classname?: string
}
export const BorderedLayout:React.FC<BorderLayoutType> = ({children, classname}) => {

    return (
        <div className={`md:border first:border-b last:border-t border-custom-gray-border md:rounded-[16px] rounded-[0px] md:px-5 px-0 ${classname}`}>
            {children}
        </div>
    );
};
