import type { INodeProperties } from 'n8n-workflow';

export const invitationsUserDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Invitations User"
					]
				}
			},
			"options": [
				{
					"name": "Invitations Get Invited User",
					"value": "Invitations Get Invited User",
					"action": "Get invitedUser from invitations",
					"description": "The user created as part of the invitation creation. Read-Only",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/invitations/{{$parameter[\"invitation-id\"]}}/invitedUser"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /invitations/{invitation-id}/invitedUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invitations User"
					],
					"operation": [
						"Invitations Get Invited User"
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
						"Invitations User"
					],
					"operation": [
						"Invitations Get Invited User"
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
						"Invitations User"
					],
					"operation": [
						"Invitations Get Invited User"
					]
				}
			}
		},
];
