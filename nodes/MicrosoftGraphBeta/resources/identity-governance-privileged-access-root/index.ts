import type { INodeProperties } from 'n8n-workflow';

export const identityGovernancePrivilegedAccessRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					]
				}
			},
			"options": [
				{
					"name": "Identity Governance Delete Privileged Access",
					"value": "Identity Governance Delete Privileged Access",
					"action": "Delete navigation property privilegedAccess for identityGovernance",
					"description": "Delete navigation property privilegedAccess for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/privilegedAccess"
						}
					}
				},
				{
					"name": "Identity Governance Get Privileged Access",
					"value": "Identity Governance Get Privileged Access",
					"action": "Get privilegedAccess from identityGovernance",
					"description": "Get privilegedAccess from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess"
						}
					}
				},
				{
					"name": "Identity Governance Update Privileged Access",
					"value": "Identity Governance Update Privileged Access",
					"action": "Update the navigation property privilegedAccess in identityGovernance",
					"description": "Update the navigation property privilegedAccess in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/privilegedAccess"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Delete Group",
					"value": "Identity Governance Privileged Access Delete Group",
					"action": "Delete navigation property group for identityGovernance",
					"description": "Delete navigation property group for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/privilegedAccess/group"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Get Group",
					"value": "Identity Governance Privileged Access Get Group",
					"action": "Get group from identityGovernance",
					"description": "Get group from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Update Group",
					"value": "Identity Governance Privileged Access Update Group",
					"action": "Update the navigation property group in identityGovernance",
					"description": "Update the navigation property group in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/privilegedAccess/group"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group List Assignment Schedule Instances",
					"value": "Identity Governance Privileged Access Group List Assignment Schedule Instances",
					"action": "Get assignmentScheduleInstances from identityGovernance",
					"description": "Get assignmentScheduleInstances from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleInstances"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Create Assignment Schedule Instances",
					"value": "Identity Governance Privileged Access Group Create Assignment Schedule Instances",
					"action": "Create new navigation property to assignmentScheduleInstances for identityGovernance",
					"description": "Create new navigation property to assignmentScheduleInstances for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleInstances"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Delete Assignment Schedule Instances",
					"value": "Identity Governance Privileged Access Group Delete Assignment Schedule Instances",
					"action": "Delete navigation property assignmentScheduleInstances for identityGovernance",
					"description": "Delete navigation property assignmentScheduleInstances for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{{$parameter[\"privilegedAccessGroupAssignmentScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Get Assignment Schedule Instances",
					"value": "Identity Governance Privileged Access Group Get Assignment Schedule Instances",
					"action": "Get assignmentScheduleInstances from identityGovernance",
					"description": "Get assignmentScheduleInstances from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{{$parameter[\"privilegedAccessGroupAssignmentScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Update Assignment Schedule Instances",
					"value": "Identity Governance Privileged Access Group Update Assignment Schedule Instances",
					"action": "Update the navigation property assignmentScheduleInstances in identityGovernance",
					"description": "Update the navigation property assignmentScheduleInstances in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{{$parameter[\"privilegedAccessGroupAssignmentScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedule Instances Get Activated Using",
					"value": "Identity Governance Privileged Access Group Assignment Schedule Instances Get Activated Using",
					"action": "Get activatedUsing from identityGovernance",
					"description": "Get activatedUsing from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{{$parameter[\"privilegedAccessGroupAssignmentScheduleInstance-id\"]}}/activatedUsing"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedule Instances Get Group",
					"value": "Identity Governance Privileged Access Group Assignment Schedule Instances Get Group",
					"action": "Get group from identityGovernance",
					"description": "Get group from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{{$parameter[\"privilegedAccessGroupAssignmentScheduleInstance-id\"]}}/group"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedule Instances Get Principal",
					"value": "Identity Governance Privileged Access Group Assignment Schedule Instances Get Principal",
					"action": "Get principal from identityGovernance",
					"description": "Get principal from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{{$parameter[\"privilegedAccessGroupAssignmentScheduleInstance-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group List Assignment Schedule Requests",
					"value": "Identity Governance Privileged Access Group List Assignment Schedule Requests",
					"action": "Get assignmentScheduleRequests from identityGovernance",
					"description": "Get assignmentScheduleRequests from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleRequests"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Create Assignment Schedule Requests",
					"value": "Identity Governance Privileged Access Group Create Assignment Schedule Requests",
					"action": "Create new navigation property to assignmentScheduleRequests for identityGovernance",
					"description": "Create new navigation property to assignmentScheduleRequests for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleRequests"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Delete Assignment Schedule Requests",
					"value": "Identity Governance Privileged Access Group Delete Assignment Schedule Requests",
					"action": "Delete navigation property assignmentScheduleRequests for identityGovernance",
					"description": "Delete navigation property assignmentScheduleRequests for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{{$parameter[\"privilegedAccessGroupAssignmentScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Get Assignment Schedule Requests",
					"value": "Identity Governance Privileged Access Group Get Assignment Schedule Requests",
					"action": "Get assignmentScheduleRequests from identityGovernance",
					"description": "Get assignmentScheduleRequests from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{{$parameter[\"privilegedAccessGroupAssignmentScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Update Assignment Schedule Requests",
					"value": "Identity Governance Privileged Access Group Update Assignment Schedule Requests",
					"action": "Update the navigation property assignmentScheduleRequests in identityGovernance",
					"description": "Update the navigation property assignmentScheduleRequests in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{{$parameter[\"privilegedAccessGroupAssignmentScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedule Requests Get Activated Using",
					"value": "Identity Governance Privileged Access Group Assignment Schedule Requests Get Activated Using",
					"action": "Get activatedUsing from identityGovernance",
					"description": "Get activatedUsing from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{{$parameter[\"privilegedAccessGroupAssignmentScheduleRequest-id\"]}}/activatedUsing"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedule Requests Get Group",
					"value": "Identity Governance Privileged Access Group Assignment Schedule Requests Get Group",
					"action": "Get group from identityGovernance",
					"description": "Get group from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{{$parameter[\"privilegedAccessGroupAssignmentScheduleRequest-id\"]}}/group"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedule Requests Get Principal",
					"value": "Identity Governance Privileged Access Group Assignment Schedule Requests Get Principal",
					"action": "Get principal from identityGovernance",
					"description": "Get principal from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{{$parameter[\"privilegedAccessGroupAssignmentScheduleRequest-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedule Requests Get Target Schedule",
					"value": "Identity Governance Privileged Access Group Assignment Schedule Requests Get Target Schedule",
					"action": "Get targetSchedule from identityGovernance",
					"description": "Get targetSchedule from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{{$parameter[\"privilegedAccessGroupAssignmentScheduleRequest-id\"]}}/targetSchedule"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group List Assignment Schedules",
					"value": "Identity Governance Privileged Access Group List Assignment Schedules",
					"action": "Get assignmentSchedules from identityGovernance",
					"description": "Get assignmentSchedules from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentSchedules"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Create Assignment Schedules",
					"value": "Identity Governance Privileged Access Group Create Assignment Schedules",
					"action": "Create new navigation property to assignmentSchedules for identityGovernance",
					"description": "Create new navigation property to assignmentSchedules for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentSchedules"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Delete Assignment Schedules",
					"value": "Identity Governance Privileged Access Group Delete Assignment Schedules",
					"action": "Delete navigation property assignmentSchedules for identityGovernance",
					"description": "Delete navigation property assignmentSchedules for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentSchedules/{{$parameter[\"privilegedAccessGroupAssignmentSchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Get Assignment Schedules",
					"value": "Identity Governance Privileged Access Group Get Assignment Schedules",
					"action": "Get assignmentSchedules from identityGovernance",
					"description": "Get assignmentSchedules from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentSchedules/{{$parameter[\"privilegedAccessGroupAssignmentSchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Update Assignment Schedules",
					"value": "Identity Governance Privileged Access Group Update Assignment Schedules",
					"action": "Update the navigation property assignmentSchedules in identityGovernance",
					"description": "Update the navigation property assignmentSchedules in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentSchedules/{{$parameter[\"privilegedAccessGroupAssignmentSchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedules Get Activated Using",
					"value": "Identity Governance Privileged Access Group Assignment Schedules Get Activated Using",
					"action": "Get activatedUsing from identityGovernance",
					"description": "Get activatedUsing from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentSchedules/{{$parameter[\"privilegedAccessGroupAssignmentSchedule-id\"]}}/activatedUsing"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedules Get Group",
					"value": "Identity Governance Privileged Access Group Assignment Schedules Get Group",
					"action": "Get group from identityGovernance",
					"description": "Get group from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentSchedules/{{$parameter[\"privilegedAccessGroupAssignmentSchedule-id\"]}}/group"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Assignment Schedules Get Principal",
					"value": "Identity Governance Privileged Access Group Assignment Schedules Get Principal",
					"action": "Get principal from identityGovernance",
					"description": "Get principal from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/assignmentSchedules/{{$parameter[\"privilegedAccessGroupAssignmentSchedule-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group List Eligibility Schedule Instances",
					"value": "Identity Governance Privileged Access Group List Eligibility Schedule Instances",
					"action": "Get eligibilityScheduleInstances from identityGovernance",
					"description": "Get eligibilityScheduleInstances from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Create Eligibility Schedule Instances",
					"value": "Identity Governance Privileged Access Group Create Eligibility Schedule Instances",
					"action": "Create new navigation property to eligibilityScheduleInstances for identityGovernance",
					"description": "Create new navigation property to eligibilityScheduleInstances for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Delete Eligibility Schedule Instances",
					"value": "Identity Governance Privileged Access Group Delete Eligibility Schedule Instances",
					"action": "Delete navigation property eligibilityScheduleInstances for identityGovernance",
					"description": "Delete navigation property eligibilityScheduleInstances for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{{$parameter[\"privilegedAccessGroupEligibilityScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Get Eligibility Schedule Instances",
					"value": "Identity Governance Privileged Access Group Get Eligibility Schedule Instances",
					"action": "Get eligibilityScheduleInstances from identityGovernance",
					"description": "Get eligibilityScheduleInstances from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{{$parameter[\"privilegedAccessGroupEligibilityScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Update Eligibility Schedule Instances",
					"value": "Identity Governance Privileged Access Group Update Eligibility Schedule Instances",
					"action": "Update the navigation property eligibilityScheduleInstances in identityGovernance",
					"description": "Update the navigation property eligibilityScheduleInstances in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{{$parameter[\"privilegedAccessGroupEligibilityScheduleInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Eligibility Schedule Instances Get Group",
					"value": "Identity Governance Privileged Access Group Eligibility Schedule Instances Get Group",
					"action": "Get group from identityGovernance",
					"description": "Get group from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{{$parameter[\"privilegedAccessGroupEligibilityScheduleInstance-id\"]}}/group"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Eligibility Schedule Instances Get Principal",
					"value": "Identity Governance Privileged Access Group Eligibility Schedule Instances Get Principal",
					"action": "Get principal from identityGovernance",
					"description": "Get principal from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{{$parameter[\"privilegedAccessGroupEligibilityScheduleInstance-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group List Eligibility Schedule Requests",
					"value": "Identity Governance Privileged Access Group List Eligibility Schedule Requests",
					"action": "Get eligibilityScheduleRequests from identityGovernance",
					"description": "Get eligibilityScheduleRequests from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Create Eligibility Schedule Requests",
					"value": "Identity Governance Privileged Access Group Create Eligibility Schedule Requests",
					"action": "Create new navigation property to eligibilityScheduleRequests for identityGovernance",
					"description": "Create new navigation property to eligibilityScheduleRequests for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Delete Eligibility Schedule Requests",
					"value": "Identity Governance Privileged Access Group Delete Eligibility Schedule Requests",
					"action": "Delete navigation property eligibilityScheduleRequests for identityGovernance",
					"description": "Delete navigation property eligibilityScheduleRequests for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{{$parameter[\"privilegedAccessGroupEligibilityScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Get Eligibility Schedule Requests",
					"value": "Identity Governance Privileged Access Group Get Eligibility Schedule Requests",
					"action": "Get eligibilityScheduleRequests from identityGovernance",
					"description": "Get eligibilityScheduleRequests from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{{$parameter[\"privilegedAccessGroupEligibilityScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Update Eligibility Schedule Requests",
					"value": "Identity Governance Privileged Access Group Update Eligibility Schedule Requests",
					"action": "Update the navigation property eligibilityScheduleRequests in identityGovernance",
					"description": "Update the navigation property eligibilityScheduleRequests in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{{$parameter[\"privilegedAccessGroupEligibilityScheduleRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Eligibility Schedule Requests Get Group",
					"value": "Identity Governance Privileged Access Group Eligibility Schedule Requests Get Group",
					"action": "Get group from identityGovernance",
					"description": "Get group from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{{$parameter[\"privilegedAccessGroupEligibilityScheduleRequest-id\"]}}/group"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Eligibility Schedule Requests Get Principal",
					"value": "Identity Governance Privileged Access Group Eligibility Schedule Requests Get Principal",
					"action": "Get principal from identityGovernance",
					"description": "Get principal from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{{$parameter[\"privilegedAccessGroupEligibilityScheduleRequest-id\"]}}/principal"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Eligibility Schedule Requests Get Target Schedule",
					"value": "Identity Governance Privileged Access Group Eligibility Schedule Requests Get Target Schedule",
					"action": "Get targetSchedule from identityGovernance",
					"description": "Get targetSchedule from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{{$parameter[\"privilegedAccessGroupEligibilityScheduleRequest-id\"]}}/targetSchedule"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group List Eligibility Schedules",
					"value": "Identity Governance Privileged Access Group List Eligibility Schedules",
					"action": "Get eligibilitySchedules from identityGovernance",
					"description": "Get eligibilitySchedules from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilitySchedules"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Create Eligibility Schedules",
					"value": "Identity Governance Privileged Access Group Create Eligibility Schedules",
					"action": "Create new navigation property to eligibilitySchedules for identityGovernance",
					"description": "Create new navigation property to eligibilitySchedules for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilitySchedules"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Delete Eligibility Schedules",
					"value": "Identity Governance Privileged Access Group Delete Eligibility Schedules",
					"action": "Delete navigation property eligibilitySchedules for identityGovernance",
					"description": "Delete navigation property eligibilitySchedules for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilitySchedules/{{$parameter[\"privilegedAccessGroupEligibilitySchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Get Eligibility Schedules",
					"value": "Identity Governance Privileged Access Group Get Eligibility Schedules",
					"action": "Get eligibilitySchedules from identityGovernance",
					"description": "Get eligibilitySchedules from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilitySchedules/{{$parameter[\"privilegedAccessGroupEligibilitySchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Update Eligibility Schedules",
					"value": "Identity Governance Privileged Access Group Update Eligibility Schedules",
					"action": "Update the navigation property eligibilitySchedules in identityGovernance",
					"description": "Update the navigation property eligibilitySchedules in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilitySchedules/{{$parameter[\"privilegedAccessGroupEligibilitySchedule-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Eligibility Schedules Get Group",
					"value": "Identity Governance Privileged Access Group Eligibility Schedules Get Group",
					"action": "Get group from identityGovernance",
					"description": "Get group from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilitySchedules/{{$parameter[\"privilegedAccessGroupEligibilitySchedule-id\"]}}/group"
						}
					}
				},
				{
					"name": "Identity Governance Privileged Access Group Eligibility Schedules Get Principal",
					"value": "Identity Governance Privileged Access Group Eligibility Schedules Get Principal",
					"action": "Get principal from identityGovernance",
					"description": "Get principal from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/privilegedAccess/group/eligibilitySchedules/{{$parameter[\"privilegedAccessGroupEligibilitySchedule-id\"]}}/principal"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /identityGovernance/privilegedAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Delete Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Delete Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Get Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Get Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Get Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Update Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Update Privileged Access"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/privilegedAccess/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Delete Group"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Delete Group"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Get Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Get Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Get Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Update Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Update Group"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/assignmentScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/assignmentScheduleInstances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Assignment Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/activatedUsing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Get Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Get Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Get Group"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Instances Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/assignmentScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/assignmentScheduleRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Assignment Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/activatedUsing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Group"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/targetSchedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Target Schedule"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Target Schedule"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedule Requests Get Target Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentSchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/assignmentSchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/assignmentSchedules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Assignment Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/activatedUsing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Get Activated Using"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Get Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Get Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Get Group"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Assignment Schedules Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Eligibility Schedule Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Get Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Get Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Get Group"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Instances Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Eligibility Schedule Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Get Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Get Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Get Group"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Get Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/targetSchedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Get Target Schedule"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Get Target Schedule"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedule Requests Get Target Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilitySchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group List Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/eligibilitySchedules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/privilegedAccess/group/eligibilitySchedules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Create Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Delete Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Get Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Update Eligibility Schedules"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Get Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Get Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Get Group"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}/principal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Get Principal"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Privileged Access Root"
					],
					"operation": [
						"Identity Governance Privileged Access Group Eligibility Schedules Get Principal"
					]
				}
			}
		},
];
