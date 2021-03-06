import React from 'react';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class Title extends PatchableComponent {
  render () {
    const { children } = this.props;

    return (
      <h1 className="page-title">
        {children}
      </h1>
    );
  }
}
