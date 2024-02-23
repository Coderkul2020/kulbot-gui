import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';

import Box from '../box/box.jsx';
import Dots from './dots.jsx';
import helpIcon from './icons/help.svg';
import backIcon from './icons/back.svg';
import download from './icons/download.svg';
import usbAndBluetoothIcon from './icons/usb-and-bluetooth.svg';
import scratchLinkIcon from './icons/scratchlink.svg';

import styles from './connection-modal.css';

const UnavailableStep = props => (
    <Box className={styles.body}>
        <Box className={styles.activityArea}>
            <div className={styles.scratchLinkHelp}>
                <div className={styles.scratchLinkHelpStep}>
                    <div className={styles.helpStepNumber}>
                        {'1'}
                    </div>
                    <div className={styles.helpStepImage}>
                        <img
                            className={styles.scratchLinkIcon}
                            src={scratchLinkIcon}
                        />
                    </div>
                    <div className={styles.helpStepText}>
                        <FormattedMessage
                            defaultMessage="Make sure you have Suny Link installed and running"
                            description="Message for getting Suny Link installed"
                            id="gui.connection.unavailable.installscratchlink"
                        />
                    </div>
                </div>
                <div className={styles.scratchLinkHelpStep}>
                    <div className={styles.helpStepNumber}>
                        {'2'}
                    </div>
                    <div className={styles.helpStepImage}>
                        <img
                            className={styles.scratchLinkIcon}
                            src={usbAndBluetoothIcon}
                        />
                    </div>
                    <div className={styles.helpStepText}>
                        <FormattedMessage
                            defaultMessage="Check that USB cable is connected or Bluetooth is enabled"
                            description="Message for making sure USB cable is connected or Bluetooth is enabled"
                            id="gui.connection.unavailable.connectUsbEnableBluetooth"
                        />
                    </div>
                </div>
            </div>
        </Box>
        <Box className={styles.bottomArea}>
            <Dots
                error
                className={styles.bottomAreaItem}
                total={3}
            />
            <Box className={classNames(styles.bottomAreaItem, styles.buttonRow)}>
                <button
                    className={styles.connectionButton}
                    onClick={props.onScanning}
                >
                    <img
                        className={classNames(styles.buttonIconLeft, styles.buttonIconBack)}
                        src={backIcon}
                    />
                    <FormattedMessage
                        defaultMessage="Try again"
                        description="Button to initiate trying the device connection again after an error"
                        id="gui.connection.unavailable.tryagainbutton"
                    />
                </button>
                <button
                    className={styles.connectionButton}
                    onClick={props.onHelp}
                >
                    <img
                        className={styles.buttonIconLeft}
                        src={helpIcon}
                    />
                    <FormattedMessage
                        defaultMessage="Help"
                        description="Button to view help content"
                        id="gui.connection.unavailable.helpbutton"
                    />
                </button>
                <button
                    className={styles.connectionButton}
                    onClick={()=>{
                        window.open("https://drive.google.com/file/d/1cZjjZCIsPjE1W2dQOuXi4LRkgOULx4gR/view?usp=sharing");
                    }}
                >
                    <img
                        className={styles.buttonIconLeft}
                        src={download}
                        style={{width: "20px", height: "20px"}}
                    />
                    <FormattedMessage
                        defaultMessage="Download"
                        description="Button to download Kulbot Link"
                        id="gui.connection.unavailable.downloadbutton"
                    />
                </button>
            </Box>
        </Box>
    </Box>
);

UnavailableStep.propTypes = {
    onHelp: PropTypes.func,
    onScanning: PropTypes.func
};

export default UnavailableStep;
