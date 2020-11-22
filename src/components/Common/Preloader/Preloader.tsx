import React from 'react';
import loading from "../../../accets/images/loading.svg";

type PreloaderPropsType = {}
export let Preloader = (props: PreloaderPropsType) => <img src={loading}/>