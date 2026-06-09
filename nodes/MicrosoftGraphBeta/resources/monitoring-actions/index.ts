import type { INodeProperties } from 'n8n-workflow';

export const monitoringActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Actions"
					]
				}
			},
			"options": [
				{
					"name": "Monitoring Alert Records Alert Record Set Portal Notification As Sent",
					"value": "Monitoring Alert Records Alert Record Set Portal Notification As Sent",
					"action": "Invoke action setPortalNotificationAsSent",
					"description": "Set the status of the notification associated with the specified alertRecord on the Microsoft EndPoint Manager admin center as sent, by setting the **isPortalNotificationSent** property of the portal notification to `true`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/monitoring/alertRecords/{{$parameter[\"alertRecord-id\"]}}/microsoft.graph.deviceManagement.setPortalNotificationAsSent"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /monitoring/alertRecords/{alertRecord-id}/microsoft.graph.deviceManagement.setPortalNotificationAsSent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Actions"
					],
					"operation": [
						"Monitoring Alert Records Alert Record Set Portal Notification As Sent"
					]
				}
			}
		},
];
