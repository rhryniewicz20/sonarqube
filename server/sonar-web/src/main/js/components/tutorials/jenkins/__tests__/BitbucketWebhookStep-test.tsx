/*
 * SonarQube
 * Copyright (C) 2009-2020 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

import { shallow } from 'enzyme';
import * as React from 'react';
import {
  mockBitbucketBindingDefinition,
  mockProjectBitbucketBindingGet
} from '../../../../helpers/mocks/alm-settings';
import BitbucketWebhookStep, { BitbucketWebhookStepProps } from '../BitbucketWebhookStep';
import { renderStepContent } from '../test-utils';

it('should render correctly', () => {
  const wrapper = shallowRender();
  expect(wrapper).toMatchSnapshot('Step wrapper');
  expect(renderStepContent(wrapper)).toMatchSnapshot('content');
  expect(renderStepContent(wrapper.setProps({ almBinding: undefined }))).toMatchSnapshot(
    'no alm binding'
  );
});

function shallowRender(props: Partial<BitbucketWebhookStepProps> = {}) {
  return shallow<BitbucketWebhookStepProps>(
    <BitbucketWebhookStep
      almBinding={mockBitbucketBindingDefinition()}
      finished={false}
      onDone={jest.fn()}
      onOpen={jest.fn()}
      open={true}
      projectBinding={mockProjectBitbucketBindingGet()}
      {...props}
    />
  );
}
