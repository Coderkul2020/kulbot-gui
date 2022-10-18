/**
 * Visual Blocks Language
 *
 * Copyright 2020 Arthur Zheng.
 * https://github.com/zhengyangliu/scratch-blocks
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

goog.provide('Blockly.Arduino.event');

goog.require('Blockly.Arduino');


Blockly.Arduino['event_whenarduinobegin'] = function() {
  Blockly.Arduino.includes_["arduino"] = "#include <Arduino.h>";
  Blockly.Arduino.includes_['include_suny'] = '#include <KULBOT.h>\nKULBOT Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.KULBOT_INIT();\n';
  var code = "";
  return code;
};

Blockly.Arduino['event_whenkulbotbegin'] = function() {
  Blockly.Arduino.includes_["arduino_1"] = "#include <Arduino.h>";

  var code = "";
  return code;
};

