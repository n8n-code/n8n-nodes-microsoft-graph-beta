import type { INodeProperties } from 'n8n-workflow';

export const teamsScheduleDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					]
				}
			},
			"options": [
				{
					"name": "Teams Delete Schedule",
					"value": "Teams Delete Schedule",
					"action": "Delete navigation property schedule for teams",
					"description": "Delete navigation property schedule for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule"
						}
					}
				},
				{
					"name": "Teams Get Schedule",
					"value": "Teams Get Schedule",
					"action": "Get schedule",
					"description": "Retrieve the properties and relationships of a schedule object. The schedule creation process conforms to the One API guideline for resource based long running operations (RELO).\nWhen clients use the PUT method, if the schedule is provisioned, the operation updates the schedule; otherwise, the operation starts the schedule provisioning process in the background. During schedule provisioning, clients can use the GET method to get the schedule and look at the `provisionStatus` property for the current state of the provisioning. If the provisioning failed, clients can get additional information from the `provisionStatusCode` property. Clients can also inspect the configuration of the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule"
						}
					}
				},
				{
					"name": "Teams Update Schedule",
					"value": "Teams Update Schedule",
					"action": "Update the navigation property schedule in teams",
					"description": "Update the navigation property schedule in teams",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule"
						}
					}
				},
				{
					"name": "Teams Schedule List Offer Shift Requests",
					"value": "Teams Schedule List Offer Shift Requests",
					"action": "List offerShiftRequest",
					"description": "Retrieve the properties and relationships of all offerShiftRequest objects in a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/offerShiftRequests"
						}
					}
				},
				{
					"name": "Teams Schedule Create Offer Shift Requests",
					"value": "Teams Schedule Create Offer Shift Requests",
					"action": "Create new navigation property to offerShiftRequests for teams",
					"description": "Create new navigation property to offerShiftRequests for teams",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/offerShiftRequests"
						}
					}
				},
				{
					"name": "Teams Schedule Delete Offer Shift Requests",
					"value": "Teams Schedule Delete Offer Shift Requests",
					"action": "Delete navigation property offerShiftRequests for teams",
					"description": "Delete navigation property offerShiftRequests for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/offerShiftRequests/{{$parameter[\"offerShiftRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Get Offer Shift Requests",
					"value": "Teams Schedule Get Offer Shift Requests",
					"action": "Get offerShiftRequests from teams",
					"description": "Get offerShiftRequests from teams",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/offerShiftRequests/{{$parameter[\"offerShiftRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Update Offer Shift Requests",
					"value": "Teams Schedule Update Offer Shift Requests",
					"action": "Update the navigation property offerShiftRequests in teams",
					"description": "Update the navigation property offerShiftRequests in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/offerShiftRequests/{{$parameter[\"offerShiftRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule List Open Shift Change Requests",
					"value": "Teams Schedule List Open Shift Change Requests",
					"action": "List openShiftChangeRequests",
					"description": "Retrieve a list of openShiftChangeRequest objects in a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/openShiftChangeRequests"
						}
					}
				},
				{
					"name": "Teams Schedule Create Open Shift Change Requests",
					"value": "Teams Schedule Create Open Shift Change Requests",
					"action": "Create openShiftChangeRequest",
					"description": "Create instance of an openShiftChangeRequest object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/openShiftChangeRequests"
						}
					}
				},
				{
					"name": "Teams Schedule Delete Open Shift Change Requests",
					"value": "Teams Schedule Delete Open Shift Change Requests",
					"action": "Delete navigation property openShiftChangeRequests for teams",
					"description": "Delete navigation property openShiftChangeRequests for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/openShiftChangeRequests/{{$parameter[\"openShiftChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Get Open Shift Change Requests",
					"value": "Teams Schedule Get Open Shift Change Requests",
					"action": "Get openShiftChangeRequests from teams",
					"description": "Get openShiftChangeRequests from teams",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/openShiftChangeRequests/{{$parameter[\"openShiftChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Update Open Shift Change Requests",
					"value": "Teams Schedule Update Open Shift Change Requests",
					"action": "Update the navigation property openShiftChangeRequests in teams",
					"description": "Update the navigation property openShiftChangeRequests in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/openShiftChangeRequests/{{$parameter[\"openShiftChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule List Open Shifts",
					"value": "Teams Schedule List Open Shifts",
					"action": "List openShift",
					"description": "List openshift objects in a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/openShifts"
						}
					}
				},
				{
					"name": "Teams Schedule Create Open Shifts",
					"value": "Teams Schedule Create Open Shifts",
					"action": "Create new navigation property to openShifts for teams",
					"description": "Create new navigation property to openShifts for teams",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/openShifts"
						}
					}
				},
				{
					"name": "Teams Schedule Delete Open Shifts",
					"value": "Teams Schedule Delete Open Shifts",
					"action": "Delete navigation property openShifts for teams",
					"description": "Delete navigation property openShifts for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/openShifts/{{$parameter[\"openShift-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Get Open Shifts",
					"value": "Teams Schedule Get Open Shifts",
					"action": "Get openShifts from teams",
					"description": "Get openShifts from teams",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/openShifts/{{$parameter[\"openShift-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Update Open Shifts",
					"value": "Teams Schedule Update Open Shifts",
					"action": "Update the navigation property openShifts in teams",
					"description": "Update the navigation property openShifts in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/openShifts/{{$parameter[\"openShift-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule List Scheduling Groups",
					"value": "Teams Schedule List Scheduling Groups",
					"action": "List scheduleGroups",
					"description": "Get the list of schedulingGroups in this schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/schedulingGroups"
						}
					}
				},
				{
					"name": "Teams Schedule Create Scheduling Groups",
					"value": "Teams Schedule Create Scheduling Groups",
					"action": "Create schedulingGroup",
					"description": "Create a new schedulingGroup.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/schedulingGroups"
						}
					}
				},
				{
					"name": "Teams Schedule Delete Scheduling Groups",
					"value": "Teams Schedule Delete Scheduling Groups",
					"action": "Delete navigation property schedulingGroups for teams",
					"description": "Delete navigation property schedulingGroups for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/schedulingGroups/{{$parameter[\"schedulingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Get Scheduling Groups",
					"value": "Teams Schedule Get Scheduling Groups",
					"action": "Get schedulingGroups from teams",
					"description": "The logical grouping of users in the schedule (usually by role).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/schedulingGroups/{{$parameter[\"schedulingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Update Scheduling Groups",
					"value": "Teams Schedule Update Scheduling Groups",
					"action": "Update the navigation property schedulingGroups in teams",
					"description": "Update the navigation property schedulingGroups in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/schedulingGroups/{{$parameter[\"schedulingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule List Shifts",
					"value": "Teams Schedule List Shifts",
					"action": "List shifts",
					"description": "Get the list of shift instances in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/shifts"
						}
					}
				},
				{
					"name": "Teams Schedule Create Shifts",
					"value": "Teams Schedule Create Shifts",
					"action": "Create shift",
					"description": "Create a new shift instance in a schedule. The duration of a shift cannot be less than 1 minute or longer than 24 hours.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/shifts"
						}
					}
				},
				{
					"name": "Teams Schedule Delete Shifts",
					"value": "Teams Schedule Delete Shifts",
					"action": "Delete navigation property shifts for teams",
					"description": "Delete navigation property shifts for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/shifts/{{$parameter[\"shift-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Get Shifts",
					"value": "Teams Schedule Get Shifts",
					"action": "Get shifts from teams",
					"description": "The shifts in the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/shifts/{{$parameter[\"shift-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Update Shifts",
					"value": "Teams Schedule Update Shifts",
					"action": "Update the navigation property shifts in teams",
					"description": "Update the navigation property shifts in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/shifts/{{$parameter[\"shift-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule List Swap Shifts Change Requests",
					"value": "Teams Schedule List Swap Shifts Change Requests",
					"action": "List swapShiftsChangeRequest",
					"description": "Retrieve a list of swapShiftsChangeRequest objects in the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/swapShiftsChangeRequests"
						}
					}
				},
				{
					"name": "Teams Schedule Create Swap Shifts Change Requests",
					"value": "Teams Schedule Create Swap Shifts Change Requests",
					"action": "Create swapShiftsChangeRequest",
					"description": "Create an instance of a swapShiftsChangeRequest object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/swapShiftsChangeRequests"
						}
					}
				},
				{
					"name": "Teams Schedule Delete Swap Shifts Change Requests",
					"value": "Teams Schedule Delete Swap Shifts Change Requests",
					"action": "Delete navigation property swapShiftsChangeRequests for teams",
					"description": "Delete navigation property swapShiftsChangeRequests for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/swapShiftsChangeRequests/{{$parameter[\"swapShiftsChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Get Swap Shifts Change Requests",
					"value": "Teams Schedule Get Swap Shifts Change Requests",
					"action": "Get swapShiftsChangeRequests from teams",
					"description": "Get swapShiftsChangeRequests from teams",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/swapShiftsChangeRequests/{{$parameter[\"swapShiftsChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Update Swap Shifts Change Requests",
					"value": "Teams Schedule Update Swap Shifts Change Requests",
					"action": "Update the navigation property swapShiftsChangeRequests in teams",
					"description": "Update the navigation property swapShiftsChangeRequests in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/swapShiftsChangeRequests/{{$parameter[\"swapShiftsChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule List Time Cards",
					"value": "Teams Schedule List Time Cards",
					"action": "List timeCard",
					"description": "Retrieve a list of timeCard entries in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeCards"
						}
					}
				},
				{
					"name": "Teams Schedule Create Time Cards",
					"value": "Teams Schedule Create Time Cards",
					"action": "Create new navigation property to timeCards for teams",
					"description": "Create new navigation property to timeCards for teams",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeCards"
						}
					}
				},
				{
					"name": "Teams Schedule Delete Time Cards",
					"value": "Teams Schedule Delete Time Cards",
					"action": "Delete navigation property timeCards for teams",
					"description": "Delete navigation property timeCards for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Get Time Cards",
					"value": "Teams Schedule Get Time Cards",
					"action": "Get timeCards from teams",
					"description": "Get timeCards from teams",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Update Time Cards",
					"value": "Teams Schedule Update Time Cards",
					"action": "Update the navigation property timeCards in teams",
					"description": "Update the navigation property timeCards in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule List Time Off Reasons",
					"value": "Teams Schedule List Time Off Reasons",
					"action": "List timeOffReasons",
					"description": "Get the list of timeOffReasons in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeOffReasons"
						}
					}
				},
				{
					"name": "Teams Schedule Create Time Off Reasons",
					"value": "Teams Schedule Create Time Off Reasons",
					"action": "Create timeOffReason",
					"description": "Create a new timeOffReason.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeOffReasons"
						}
					}
				},
				{
					"name": "Teams Schedule Delete Time Off Reasons",
					"value": "Teams Schedule Delete Time Off Reasons",
					"action": "Delete navigation property timeOffReasons for teams",
					"description": "Delete navigation property timeOffReasons for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeOffReasons/{{$parameter[\"timeOffReason-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Get Time Off Reasons",
					"value": "Teams Schedule Get Time Off Reasons",
					"action": "Get timeOffReasons from teams",
					"description": "The set of reasons for a time off in the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeOffReasons/{{$parameter[\"timeOffReason-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Update Time Off Reasons",
					"value": "Teams Schedule Update Time Off Reasons",
					"action": "Update the navigation property timeOffReasons in teams",
					"description": "Update the navigation property timeOffReasons in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeOffReasons/{{$parameter[\"timeOffReason-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule List Time Off Requests",
					"value": "Teams Schedule List Time Off Requests",
					"action": "List timeOffRequest",
					"description": "Retrieve a list of timeoffrequest objects in the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeOffRequests"
						}
					}
				},
				{
					"name": "Teams Schedule Create Time Off Requests",
					"value": "Teams Schedule Create Time Off Requests",
					"action": "Create new navigation property to timeOffRequests for teams",
					"description": "Create new navigation property to timeOffRequests for teams",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeOffRequests"
						}
					}
				},
				{
					"name": "Teams Schedule Delete Time Off Requests",
					"value": "Teams Schedule Delete Time Off Requests",
					"action": "Delete navigation property timeOffRequests for teams",
					"description": "Delete navigation property timeOffRequests for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeOffRequests/{{$parameter[\"timeOffRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Get Time Off Requests",
					"value": "Teams Schedule Get Time Off Requests",
					"action": "Get timeOffRequests from teams",
					"description": "Get timeOffRequests from teams",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeOffRequests/{{$parameter[\"timeOffRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Update Time Off Requests",
					"value": "Teams Schedule Update Time Off Requests",
					"action": "Update the navigation property timeOffRequests in teams",
					"description": "Update the navigation property timeOffRequests in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timeOffRequests/{{$parameter[\"timeOffRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule List Times Off",
					"value": "Teams Schedule List Times Off",
					"action": "List timesOff",
					"description": "Get the list of timeOff instances in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timesOff"
						}
					}
				},
				{
					"name": "Teams Schedule Create Times Off",
					"value": "Teams Schedule Create Times Off",
					"action": "Create timeOff",
					"description": "Create a new timeOff instance in a schedule.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timesOff"
						}
					}
				},
				{
					"name": "Teams Schedule Delete Times Off",
					"value": "Teams Schedule Delete Times Off",
					"action": "Delete navigation property timesOff for teams",
					"description": "Delete navigation property timesOff for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timesOff/{{$parameter[\"timeOff-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Get Times Off",
					"value": "Teams Schedule Get Times Off",
					"action": "Get timesOff from teams",
					"description": "The instances of times off in the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timesOff/{{$parameter[\"timeOff-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Schedule Update Times Off",
					"value": "Teams Schedule Update Times Off",
					"action": "Update the navigation property timesOff in teams",
					"description": "Update the navigation property timesOff in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/schedule/timesOff/{{$parameter[\"timeOff-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /teams/{team-id}/schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Delete Schedule"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Delete Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Get Schedule"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Get Schedule"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Get Schedule"
					]
				}
			}
		},
		{
			"displayName": "PUT /teams/{team-id}/schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Update Schedule"
					]
				}
			}
		},
		{
			"displayName": "PUT /teams/{team-id}/schedule<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Update Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/offerShiftRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Offer Shift Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Offer Shift Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Offer Shift Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Offer Shift Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Offer Shift Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Offer Shift Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Offer Shift Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Offer Shift Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/offerShiftRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/offerShiftRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Offer Shift Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Offer Shift Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Offer Shift Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/offerShiftRequests/{offerShiftRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/openShiftChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shift Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shift Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shift Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shift Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shift Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shift Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shift Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shift Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/openShiftChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/openShiftChangeRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Open Shift Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Open Shift Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Open Shift Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/openShifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/openShifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/openShifts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Open Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/openShifts/{openShift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Open Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Open Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/schedulingGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Scheduling Groups"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Scheduling Groups"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Scheduling Groups"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Scheduling Groups"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Scheduling Groups"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Scheduling Groups"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Scheduling Groups"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/schedulingGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/schedulingGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Scheduling Groups"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Scheduling Groups"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/shifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/shifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/shifts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Shifts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/schedule/shifts/{shift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/shifts/{shift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Shifts"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/shifts/{shift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/shifts/{shift-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/swapShiftsChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Swap Shifts Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Swap Shifts Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Swap Shifts Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Swap Shifts Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Swap Shifts Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Swap Shifts Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Swap Shifts Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Swap Shifts Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/swapShiftsChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/swapShiftsChangeRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Swap Shifts Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Swap Shifts Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Swap Shifts Change Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/timeCards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Cards"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Cards"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Cards"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Cards"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Cards"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Cards"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Cards"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Cards"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Cards"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/timeCards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Time Cards"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/timeCards<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Time Cards"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Time Cards"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Time Cards"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/timeCards/{timeCard-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Time Cards"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Time Cards"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Time Cards"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Time Cards"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Time Cards"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/timeOffReasons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Reasons"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Reasons"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Reasons"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Reasons"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Reasons"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Reasons"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Reasons"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/timeOffReasons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/timeOffReasons<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Time Off Reasons"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Time Off Reasons"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/timeOffRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/timeOffRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/timeOffRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Time Off Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Time Off Requests"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/timesOff",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Times Off"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Times Off"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Times Off"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Times Off"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Times Off"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Times Off"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Times Off"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule List Times Off"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/timesOff",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Times Off"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/schedule/timesOff<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Create Times Off"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Times Off"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Delete Times Off"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/schedule/timesOff/{timeOff-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Times Off"
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
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Get Times Off"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Times Off"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Schedule"
					],
					"operation": [
						"Teams Schedule Update Times Off"
					]
				}
			}
		},
];
