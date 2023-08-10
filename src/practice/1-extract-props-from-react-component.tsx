import React from "react";

const MyFunctionComponent = (props: { enabled: boolean }) => {
    return null;
};

class MyClassComponent extends React.Component<{
    enabled: boolean;
    name: string;
}> {}

// Your code here !!!
type PropsForm<Component> = Component extends React.FC<infer FProps>
    ? FProps
    : Component extends React.Component<infer CProps>
        ? CProps
        : never;

//Result
type FunctionComponentProps = PropsForm<typeof MyFunctionComponent>;
// {enabled: boolean}

type ClassComponentProps = PropsForm<MyClassComponent>;
// {enabled: boolean, name: string}