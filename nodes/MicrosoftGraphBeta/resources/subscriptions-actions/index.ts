import type { INodeProperties } from 'n8n-workflow';

export const subscriptionsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions Actions"
					]
				}
			},
			"options": [
				{
					"name": "Subscriptions Subscription Reauthorize",
					"value": "Subscriptions Subscription Reauthorize",
					"action": "Invoke action reauthorize",
					"description": "Invoke action reauthorize",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/subscriptions/{{$parameter[\"subscription-id\"]}}/microsoft.graph.reauthorize"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /subscriptions/{subscription-id}/microsoft.graph.reauthorize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions Actions"
					],
					"operation": [
						"Subscriptions Subscription Reauthorize"
					]
				}
			}
		},
];
