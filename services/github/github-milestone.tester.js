'use strict'

const { isMetric } = require('../test-validators')
const t = (module.exports = require('../tester').createServiceTester())

t.create('All Milestones')
  .get('/all/MacroPower/milestone-test.json')
  .expectBadge({
    label: 'milestones',
    message: isMetric,
  })

t.create('Open Milestones')
  .get('/open/MacroPower/milestone-test.json')
  .expectBadge({
    label: 'active milestones',
    message: isMetric,
  })

t.create('Closed Milestones')
  .get('/closed/MacroPower/milestone-test.json')
  .expectBadge({
    label: 'completed milestones',
    message: isMetric,
  })

t.create('Milestones (repo not found)')
  .get('/all/badges/helmets.json')
  .expectBadge({
    label: 'milestones',
    message: 'repo not found',
  })
