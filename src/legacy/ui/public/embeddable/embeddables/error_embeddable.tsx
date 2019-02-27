/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Embeddable } from 'ui/embeddable/embeddables/embeddable';

export const ERROR_EMBEDDABLE_TYPE = 'error';

export class ErrorEmbeddable extends Embeddable<string, string> {
  constructor(error: string) {
    super({ id: 'error', type: ERROR_EMBEDDABLE_TYPE }, error, error);
  }

  public onInputChanged(input: string) {
    this.input = input;
    this.output = input;
  }

  public render(dom: React.ReactNode) {
    // @ts-ignore
    ReactDOM.render(<div>Error: {this.input} </div>, dom);
  }
}
