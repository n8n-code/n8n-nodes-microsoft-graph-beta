import type { INodeProperties } from 'n8n-workflow';

export const appCommsApplicationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"App Comms Application"
					]
				}
			},
			"options": [
				{
					"name": "App Comms Application Get Comms Application",
					"value": "App Comms Application Get Comms Application",
					"action": "Get app",
					"description": "Get app",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app"
						}
					}
				},
				{
					"name": "App Comms Application Update Comms Application",
					"value": "App Comms Application Update Comms Application",
					"action": "Update app",
					"description": "Update app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /app",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Comms Application"
					],
					"operation": [
						"App Comms Application Get Comms Application"
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
						"App Comms Application"
					],
					"operation": [
						"App Comms Application Get Comms Application"
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
						"App Comms Application"
					],
					"operation": [
						"App Comms Application Get Comms Application"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Comms Application"
					],
					"operation": [
						"App Comms Application Update Comms Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Comms Application"
					],
					"operation": [
						"App Comms Application Update Comms Application"
					]
				}
			}
		},
		{
			"displayName": "Calls",
			"name": "calls",
			"type": "json",
			"default": "[\n  {\n    \"activeModalities\": [\n      null\n    ],\n    \"answeredBy\": {\n      \"identity\": {\n        \"application\": {},\n        \"device\": {},\n        \"user\": {}\n      },\n      \"nonAnonymizedIdentity\": {}\n    },\n    \"audioRoutingGroups\": [\n      {\n        \"receivers\": [\n          null\n        ],\n        \"sources\": [\n          null\n        ]\n      }\n    ],\n    \"callOptions\": {},\n    \"callRoutes\": [\n      {\n        \"final\": {},\n        \"original\": {}\n      }\n    ],\n    \"chatInfo\": {},\n    \"contentSharingSessions\": [\n      {}\n    ],\n    \"incomingContext\": {\n      \"onBehalfOf\": {},\n      \"transferor\": {}\n    },\n    \"mediaConfig\": {},\n    \"mediaState\": {},\n    \"meetingCapability\": {},\n    \"meetingInfo\": {},\n    \"operations\": [\n      {\n        \"resultInfo\": {}\n      }\n    ],\n    \"participants\": [\n      {\n        \"info\": {},\n        \"mediaStreams\": [\n          {\n            \"mediaType\": {}\n          }\n        ],\n        \"recordingInfo\": {\n          \"initiatedBy\": {},\n          \"initiator\": {}\n        },\n        \"restrictedExperience\": {}\n      }\n    ],\n    \"requestedModalities\": [\n      {}\n    ],\n    \"resultInfo\": {},\n    \"routingPolicies\": [\n      null\n    ],\n    \"source\": {},\n    \"targets\": [\n      {\n        \"endpointType\": {},\n        \"identity\": {}\n      }\n    ],\n    \"toneInfo\": {},\n    \"transcription\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "calls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Comms Application"
					],
					"operation": [
						"App Comms Application Update Comms Application"
					]
				}
			}
		},
		{
			"displayName": "Online Meetings",
			"name": "onlineMeetings",
			"type": "json",
			"default": "[\n  {\n    \"anonymizeIdentityForRoles\": [\n      null\n    ],\n    \"attendanceReports\": [\n      {\n        \"attendanceRecords\": [\n          {\n            \"attendanceIntervals\": [\n              {}\n            ],\n            \"identity\": {}\n          }\n        ]\n      }\n    ],\n    \"audioConferencing\": {\n      \"tollFreeNumbers\": [\n        null\n      ],\n      \"tollNumbers\": [\n        null\n      ]\n    },\n    \"broadcastSettings\": {\n      \"captions\": {\n        \"translationLanguages\": [\n          null\n        ]\n      }\n    },\n    \"capabilities\": [\n      null\n    ],\n    \"chatInfo\": {},\n    \"joinInformation\": {},\n    \"joinMeetingIdSettings\": {},\n    \"lobbyBypassSettings\": {},\n    \"meetingAttendanceReport\": {},\n    \"participants\": {\n      \"attendees\": [\n        {\n          \"identity\": {\n            \"application\": {},\n            \"device\": {},\n            \"user\": {}\n          },\n          \"role\": {}\n        }\n      ],\n      \"contributors\": [\n        {}\n      ],\n      \"organizer\": {},\n      \"producers\": [\n        {}\n      ]\n    },\n    \"registration\": {\n      \"@odata.type\": \"#microsoft.graph.meetingRegistration\",\n      \"registrants\": [\n        {}\n      ],\n      \"customQuestions\": [\n        {\n          \"answerOptions\": [\n            null\n          ]\n        }\n      ],\n      \"speakers\": [\n        {}\n      ]\n    },\n    \"transcripts\": [\n      {}\n    ],\n    \"virtualAppointment\": {\n      \"appointmentClients\": [\n        {}\n      ],\n      \"settings\": {}\n    },\n    \"watermarkProtection\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "onlineMeetings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Comms Application"
					],
					"operation": [
						"App Comms Application Update Comms Application"
					]
				}
			}
		},
];
