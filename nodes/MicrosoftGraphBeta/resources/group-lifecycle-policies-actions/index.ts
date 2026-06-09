import type { INodeProperties } from 'n8n-workflow';

export const groupLifecyclePoliciesActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Actions"
					]
				}
			},
			"options": [
				{
					"name": "Group Lifecycle Policies Renew Group",
					"value": "Group Lifecycle Policies Renew Group",
					"action": "Invoke action renewGroup",
					"description": "Renew a group's expiration. When a group is renewed, the group expiration is extended by the number of days defined in the policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groupLifecyclePolicies/microsoft.graph.renewGroup"
						}
					}
				},
				{
					"name": "Group Lifecycle Policies Group Lifecycle Policy Add Group",
					"value": "Group Lifecycle Policies Group Lifecycle Policy Add Group",
					"action": "Invoke action addGroup",
					"description": "Invoke action addGroup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groupLifecyclePolicies/{{$parameter[\"groupLifecyclePolicy-id\"]}}/microsoft.graph.addGroup"
						}
					}
				},
				{
					"name": "Group Lifecycle Policies Group Lifecycle Policy Remove Group",
					"value": "Group Lifecycle Policies Group Lifecycle Policy Remove Group",
					"action": "Invoke action removeGroup",
					"description": "Invoke action removeGroup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groupLifecyclePolicies/{{$parameter[\"groupLifecyclePolicy-id\"]}}/microsoft.graph.removeGroup"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /groupLifecyclePolicies/microsoft.graph.renewGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Actions"
					],
					"operation": [
						"Group Lifecycle Policies Renew Group"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Actions"
					],
					"operation": [
						"Group Lifecycle Policies Renew Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/microsoft.graph.addGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Actions"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Add Group"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Actions"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Add Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/microsoft.graph.removeGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Actions"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Remove Group"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Actions"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Remove Group"
					]
				}
			}
		},
];
