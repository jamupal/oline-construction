import {IntlProvider} from 'react-intl';
import { LOCALES } from '../../common/constants';
import { Fragment } from 'react';
import messages from './messages'
import flatten from 'flat';

const Provider = ({children, locale = LOCALES.SPANISH}) =>(
    <IntlProvider textComponent = {Fragment}
        locale = {locale}
        messages = {flatten(messages[locale])} > {children}
        </IntlProvider>   
)

export default Provider;